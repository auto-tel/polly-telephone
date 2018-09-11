# polly-telephone

## Introduction

polly-telephone is a webRTC telephone demo. It shows how to convert text to mp3 audio with aws.polly, feed to webRTC phone(by sip.js), as a concept prove.

## Prerequisites
- nodejs >= 10.9
- get a aws account, create aws_access_key_id and aws_secret_access_key, put it in `~/.aws/credentials`, like this:
```bash
[default]
aws_access_key_id = <your aws_access_key_id>
aws_secret_access_key = <your aws_secret_access_key>
```
refer to https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html

## run
```bash
git clone https://github.com/auto-tel/polly-telephone.git
cd polly-telephone
npm i

# create your config, optional
cp config.sample.js config.js

# run the server
npm run s

# run the client, and it will auto open in default browser
npm run c

```

## license
MIT
