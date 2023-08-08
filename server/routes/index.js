var express = require("express");
var router = express.Router();

module.exports = router;

const Client = require("@notionhq/client").Client;
const fs = require("fs");

const NOTION_API_KEY = "secret_11sMvDxGpEvkAMwcAflP0YaedOxMQMrIH8d2O8oMdFP";
const BUDGET_DB_ID = "90dbc151e5d746a3a6b07bf182d3f0bf";

const notion = new Client({ auth: NOTION_API_KEY });

const getNotionApi = async () => {
  const notionData = await notion.databases.query({
    database_id: BUDGET_DB_ID,
    filter: {
      property: "Category",
      select: {
        equals: "스터디",
      },
    },
  });

  const notionResult = JSON.stringify(notionData.results, [
    "properties",
    "Manager",
    "rich_text",
    "plain_text",
    "Image",
    "files",
    "file",
    "url",
    "Date",
    "date",
    "start",
    "end",
    "Name",
    "title",
    "plain_text",
    "public_url",
  ]);

  const parsingResult = JSON.parse(notionResult);
  parsingResult.forEach((result) => {
    console.log(result["properties"]["Manager"]["rich_text"][0]["plain_text"]);
  });

  fs.writeFile("../src/Pages/Study/study.json", notionResult, function (err) {
    console.log("json파일 생성 완료");
  });
  return notionResult;
};

const app = express();

app.use("/", async (req, res) => {
  try {
    const notionData = await getNotionApi();
    res.send(notionData);
  } catch (err) {
    console.error(err);
  }
});

app.listen(app.get("port"), () => {
  console.log("Notion API 서버 실행");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Test", content: getNotionApi() });
  res.render("index", { title: "Test", content: getNotionApi() });
});
