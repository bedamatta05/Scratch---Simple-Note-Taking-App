const config = {
  STRIPE_KEY: "pk_test_51IF16sAb3DdjGi3cqwkXRF1cmgN0u8z4is5iJzq5SqHb2LiuZXiTFPsXOyzcPH9UFMCuL2obgJ1FYX13Tsa7aanL00pFniEMMW",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-south-1",
    BUCKET: "new-notes-app-upload",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://wx592asuj5.execute-api.ap-south-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_SYjb2OivU",
    APP_CLIENT_ID: "7gsle022gaatifrb70t98h2kov",
    IDENTITY_POOL_ID: "ap-south-1:1b5c0d81-cd72-4692-8ba5-7481fa10de8e",
  },
};

export default config;