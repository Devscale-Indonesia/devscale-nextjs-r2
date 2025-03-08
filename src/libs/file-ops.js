import { s3Client } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  // 1. Siapin file sesuai format yang diminta oleh AWS/R2

  // convert from file to Buffer
  const buffer = Buffer.from(await body.arrayBuffer());

  // 2. Send Command (Command untuk upload file)
  try {
    const fileUpload = await s3Client.send(
      new PutObjectCommand({
        Bucket: "", // r2 bucket name
        Key: `${folder}/${key}`,
        ContentType: body.type, // also u can specify -> "image/png"
        Body: buffer,
      })
    );
    console.log(fileUpload, "Upload OK! ✅");
  } catch (error) {
    console.log(error);
  }
}
