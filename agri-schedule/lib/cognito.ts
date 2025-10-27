const openidclient = require('openid-client');
const { generators } = openidclient;

let client: any = null;
// Initialize OpenID Client

export async function getClient(){
    const openidclient = require('openid-client');
    const { generators } = openidclient;
    if (client) return {client, generators}

    const issuer = await openidclient.Issuer.discover("https://cognito-idp.us-east-2.amazonaws.com/us-east-2_LdWryHu94");

    client = new issuer.Client({
        client_id: "6pk7kbmeofv7agbuddqeh0p32b",
        client_secret: "<client secret>",
        redirect_uris: ["https://d84l1y8p4kdic.cloudfront.net"],
        response_types: ["code"]
    });

    return {client, generators}
}