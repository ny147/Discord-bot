const { Client } = require('@notionhq/client');
const config = require('../../config.json')
const notion = new Client( { auth: config.NOTION_API_KEY });
const databaseId = 'dff43897c5484289b56257d2fd2773ef';

const data = (async (Day) => {
	const response = await notion.databases.query({
	  database_id: databaseId,
	  filter : {
		property : "Active Day",
		multi_select: {
			contains: Day
		  }
	}
}
   )
  return response;
})

module.exports = data 