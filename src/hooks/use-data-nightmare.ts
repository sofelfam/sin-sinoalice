import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import { DeepReadonly } from 'utility-types';

type Props = DeepReadonly<{
  allNightmare: {
    nodes: {
      id: string,
      name: string,
      icon: string | number,
      cskill: string,
      cskilltxt: string,
      ready: string | number,
      activate: string | number,
    }[];
  }
}>;

export default (): any => {
  const queryData = useStaticQuery<Props>(graphql`
  {
    allNightmare {
      nodes {
        id
        name
        icon
        cskill
        cskilltxt
        ready
        activate
      }
    }
  }
  `);
  
  const [data, setData] = useState([])
  useEffect(() => {
    const temp = [];
    queryData.allNightmare.nodes.map(e => {
      temp.push(e);
    })
    setData(temp);
  }, [])

  return data;
};
