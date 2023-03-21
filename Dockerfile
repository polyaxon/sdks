FROM arm64v8/python:3.11.2-slim-buster

# This dockerfile is intended for dev only purposes
LABEL maintainer="Polyaxon, Inc. <contact@polyaxon.com>"

# build-essential for gcc
# gpg for gosu
# libpcre3 for uwsgi internal routing pcre
# LibYAML by default to increase performance of pyyaml: add "libyaml-cpp-dev libyaml-dev"
RUN apt-get -y update && apt-get install -y --no-install-recommends \
  openssl \
  dumb-init \
  iproute2 \
  ca-certificates \
  curl \
  build-essential \
  gpg \
  libpcre3 libpcre3-dev \
  && apt-get autoremove \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN apt-get -y update && apt-get -y install git && apt-get install -y vim

RUN apt-get -y update && \
  apt-get -y install curl unzip && \
  apt-get autoremove -y && \
  apt-get clean -y && \
  rm -rf /var/lib/apt/lists/*

# Install Go
RUN mkdir -p /goroot && \
  curl https://dl.google.com/go/go1.19.6.linux-arm64.tar.gz | tar xvzf - -C /goroot --strip-components=1

# Set environment variables.
ENV GOROOT /goroot
ENV GOPATH /gopath
RUN mkdir -p $GOPATH/src
ENV PATH $GOROOT/bin:$GOPATH/bin:$PATH

# Install `protoc` v22.0
RUN curl -OL https://github.com/google/protobuf/releases/download/v22.0/protoc-22.0-linux-aarch_64.zip
RUN unzip protoc-22.0-linux-aarch_64.zip -d protoc22
RUN mv protoc22/bin/* /usr/bin/
RUN mv protoc22/include/* /usr/local/include/

# Go Deps
VOLUME /sdks
COPY . /sdks
WORKDIR /sdks
RUN go get -u github.com/golang/protobuf/protoc-gen-go
RUN go get -u github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway
RUN go get -u github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2
RUN go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
RUN go get -u github.com/go-swagger/go-swagger/cmd/swagger
RUN go install github.com/go-swagger/go-swagger/cmd/swagger

# HTML openapi
#RUN npm install -g bootprint
#RUN npm install -g bootprint-openapi
#RUN npm -g install html-inline

# Install Python gRPC tools.
# RUN python -m pip install grpcio grpcio-tools

# AUTGOGEN
RUN git clone https://github.com/mbrukman/autogen.git /usr/local/bin/autogen
