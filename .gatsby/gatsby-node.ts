import { GatsbyNode } from 'gatsby';
import axios from 'axios';
import cheerio from 'cheerio';
import { createRemoteFileNode } from 'gatsby-source-filesystem';

// If you don't use query in gatsby-node or any other functions, you can remove these functions.

// query example
// const query = `
//    query {
//      ...
//    }
// `;

// TIPS: you can't use QraphQL query fragments to get fluid object in gatsby-node.

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  // const result = await graphql(query);
  console.log(createPage);
  console.log(graphql);
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId, createContentDigest }) => {
  /* (中略) */

  const postUrls = [
    'https://sinoalice.game-db.tw/package/alice_nightmares.js',
  ];

  const colsArr:string[] = [];
  const RowsArrs:string[] = [];

  // Promise.allで処理するとリクエスト多可で503になるのでfor文で一件ずつ処理する
  for (const postUrl of postUrls) {
    const res = await axios.get(postUrl);

    colsArr.push(...res.data.Cols.split('|'));
    res.data.Rows.map(row => {
      const RowsArr = [];
      row.split('|').map(data => {
        RowsArr.push(data);
      });
      RowsArrs.push(RowsArr);
    });
  }

  RowsArrs.forEach(data => {
    if (+data[colsArr.indexOf('Rarity')] < 6) return;

    const node = {
      id: createNodeId(`nightmare-${data[colsArr.indexOf('Icon')]}`),
      name: data[colsArr.indexOf('Name')],
      icon: data[colsArr.indexOf('Icon')],
      rare: data[colsArr.indexOf('Rarity')],
      mskill: data[colsArr.indexOf('QuestSkill')],
      mskilltxt: data[colsArr.indexOf('QuestSkillDetail')],
      cskill: data[colsArr.indexOf('GvgSkill')],
      cskilltxt: data[colsArr.indexOf('GvgSkillDetail')],
      ready: data[colsArr.indexOf('GvgSkillLead')],
      activate: data[colsArr.indexOf('GvgSkillDur')],
      internal: {
        type: "Nightmare",
        contentDigest: createContentDigest(data),
      }
    }
    actions.createNode(node);
  })
};