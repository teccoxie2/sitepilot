FROM debian:bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl unzip python3 \
  && rm -rf /var/lib/apt/lists/*

ARG RATHOLE_VERSION=v0.5.0
ARG RATHOLE_SHA256=3e7d0d0f365120cd3cd351d147d1a12ee960c8068b464d4dd533a3821873b80e
RUN curl -fsSL -o /tmp/rathole.zip \
      "https://github.com/rapiz1/rathole/releases/download/${RATHOLE_VERSION}/rathole-x86_64-unknown-linux-gnu.zip" \
  && echo "${RATHOLE_SHA256}  /tmp/rathole.zip" | sha256sum -c - \
  && unzip /tmp/rathole.zip -d /usr/local/bin \
  && chmod +x /usr/local/bin/rathole \
  && rm /tmp/rathole.zip

COPY write_config.py /app/write_config.py
ENV RATHOLE_BIN=/usr/local/bin/rathole
ENV RATHOLE_MODE=server
ENTRYPOINT ["python3", "/app/write_config.py"]
CMD ["--mode", "server", "--run"]
