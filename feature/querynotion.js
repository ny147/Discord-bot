const { Client } = require('@notionhq/client');
const config = require('../config.json')
const notion = new Client( config.NOTION_API_KEY);

// replace with your own database ID
const databaseId = 'bba99ab494404a068262759d26aeb875';

(async () => {
	const response = await notion.databases.query({
	  database_id: databaseId
	});
    console.log(response)
  return response;
})()
// .then( (e)=> console.log(e))