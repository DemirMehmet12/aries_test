# `AFJ 0.3.3 And DID V1 SAMPLES`   

# Requirements   

- Docker
- Network
- NodeJS(tested with v18.16.0)
- Aries Framework Javascript (0.3.3)

# NETWORK

```bash
# Build indy pool
docker build -f network/indy-pool.dockerfile -t indy-pool . --platform linux/amd64

# NOTE: If you are on an ARM (M1) mac use the `network/indy-pool-arm.dockerfile` instead
# docker build -f network/indy-pool-arm.dockerfile -t indy-pool . --platform linux/arm64/v8

# Start indy pool
docker run -d --rm --name indy-pool -p 9701-9708:9701-9708 indy-pool

# Setup CLI. This creates a wallet, connects to the ledger and sets the Transaction Author Agreement
docker exec indy-pool indy-cli-setup

#  DID and Verkey from seed. Set 'Trustee' role in order to be able to register public DIDs
docker exec indy-pool add-did-from-seed 000000000000000000000000Trustee9 TRUSTEE

# If you want to register using the DID/Verkey you can use
# docker exec indy-pool add-did "NkGXDEPgpFGjQKMYmz6SyF" "CrSA1WbYYWLJoHm16Xw1VEeWxFvXtWjtsfEzMsjB5vDT"
```
# Genesis Transaction

```bash
python3 -m http.server --directory network/genessis --bind 0.0.0.0 9000
```

# Init demo

```bash
yarn install
```

# Run demo

```bash
yarn demo1
```

OR

```bash
yarn demo2
```