import axios, { AxiosResponse } from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

type Data = {
  id: number;
  title: string;
  description: string;
};
interface Article {
  id: number;
  title: string;
  description: string;
}
axios.get(url).then((response: AxiosResponse<Data[]>) => {
  //let data: Article[] = response.data;
  let data = response.data;
  data = [{ id: 1, title: 'titles', description: 'desc' }];
  console.log(data);
});
