const dev = {
  STRIPE_KEY: "pk_test_51IF16sAb3DdjGi3cqwkXRF1cmgN0u8z4is5iJzq5SqHb2LiuZXiTFPsXOyzcPH9UFMCuL2obgJ1FYX13Tsa7aanL00pFniEMMW",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1w9zinjj0puo4"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://ok7n0j7cib.execute-api.ap-south-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_7qHq4gwGl",
    APP_CLIENT_ID: "61t06r7ea5ecn13lben0nr6ik6",
    IDENTITY_POOL_ID: "ap-south-1:1537a17e-69e0-428e-afc7-ddc2e3eda84c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IF16sAb3DdjGi3cqwkXRF1cmgN0u8z4is5iJzq5SqHb2LiuZXiTFPsXOyzcPH9UFMCuL2obgJ1FYX13Tsa7aanL00pFniEMMW",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-80qluv7hlkpp"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://wx592asuj5.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_rPMOTR0eh",
    APP_CLIENT_ID: "4cje23241is7nvbndb4ii9j0md",
    IDENTITY_POOL_ID: "ap-south-1:2f70a52e-3bd1-4742-96be-44cbee2b7e71"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;