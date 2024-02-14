import {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';

export default function useDataLocal(folder) {
  const {i18n} = useTranslation();

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `/locale/${i18n.language}/${folder}/data.json`,
      );
      const data = await response.json();

      setData(data);
    };

    getData();
  }, [folder, i18n.language]);

  return {data, setData};
}
