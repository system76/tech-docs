FROM node:24-slim
RUN apt update && apt install -y --no-install-recommends ca-certificates git
RUN corepack enable
WORKDIR /app

RUN echo 'PROMPT_COMMAND="history -a"' >> /root/.bashrc

ENV HISTFILE=/history/.bash_history \
    HISTFILESIZE=10000 \
    HISTSIZE=10000

VOLUME /history

PORT 4321

CMD ["/bin/bash"]