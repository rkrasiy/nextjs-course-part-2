import fs from "fs";
import path from "path";

export function buildRegisterPath() {
  return path.join(process.cwd(), "data", "register.json");
}

export function extractUser(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    const newUser = {
      id: new Date().toISOString(),
      email: email,
    };

    //store that in a database or in a file
    const filePath = buildRegisterPath();
    const data = extractUser(filePath);
    // console.log("Path: ", filePath)
    data.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", logedIn: newUser });
  } else {
    const data = extractUser(buildRegisterPath());
    res.status(200).json({ logedIn: data });
  }
}

export default handler;
