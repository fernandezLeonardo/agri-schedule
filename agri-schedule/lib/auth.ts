import { CognitoJwtVerifier } from "aws-jwt-verify";

export const accessTokenVerifier = CognitoJwtVerifier.create({
  userPoolId: process.env.USER_POOL_ID || "",
  tokenUse: "access",
  clientId: process.env.CLIENT_ID || "",
  // region is inferred by the verifier from JWKS url, but keep for clarity
});

export async function verifyAccessToken(token: string) {
  try {
    const payload = await accessTokenVerifier.verify(token);
    return payload;
  } catch (err) {
    throw err;
  }
}

export default accessTokenVerifier;
