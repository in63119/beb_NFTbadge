sequelize-cli를 사용해 migrate을 진행합니다.

```bash
$ npx sequelize-cli model:generate --name Student --attributes name:string,userid:integer,email:string,mainAddress:string,testAddress:string
```

```bash

$ npx sequelize-cli db:migrate
```
