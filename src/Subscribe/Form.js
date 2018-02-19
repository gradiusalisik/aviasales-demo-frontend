import React from "react";
import { Form, Field, Input, Button } from "./styled";

export default () => (
  <Form action="#" method="GET">
    <Field>
      <Input type="text" placeholder="Ваш email" />
      <Button>Подписаться</Button>
    </Field>
  </Form>
);
