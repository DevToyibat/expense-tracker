import React from "react";
import Labels from "./Labels";
import {
  Chart,
  Container,
  ContentHolder,
  ContentLeft,
  ContentRight,
  Description,
  Form,
  FormButton,
  FormContainer,
  FormInput,
  HistoryBox,
  HistoryDesc,
  Icon,
  Percentage,
  SelectInput,
  TitleHolder,
  Wrapper,
} from "../styles/HomeElements";
import Graph from "./Graph";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    type: yup.string().required(),
    amount: yup.number().positive().integer().required(),
  })
  .required();

const HomeScreen = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm(schema);

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };
  return (
    <Container>
      <Wrapper>
        <TitleHolder>
          <h1>expense tracker</h1>
        </TitleHolder>
        <ContentHolder>
          <ContentLeft>
            <Chart>
              <Graph />
            </Chart>
            <Percentage>
              <Labels />
            </Percentage>
          </ContentLeft>
          <ContentRight>
            <FormContainer>
              <Form onSubmit={handleSubmit(submitHandler)}>
                <h1>Transaction</h1>
                <FormInput
                  type="text"
                  placeholder="Salary, Rent, etc"
                  {...register("name", { required: true })}
                />
                <SelectInput {...register("type", { required: true })}>
                  <option value="Expense" defaultValue="Expense">
                    Expense
                  </option>
                  <option value="Investment">Investment</option>
                  <option value="Savings">Savings</option>
                </SelectInput>
                <FormInput
                  type="number"
                  placeholder="Amount"
                  {...register("amount", { required: true })}
                />
                <FormButton type="submit">Make Transaction</FormButton>
              </Form>
            </FormContainer>
            <h1>History</h1>
            <Description>
              <HistoryBox>
                <Icon />
                <HistoryDesc>Salary</HistoryDesc>
              </HistoryBox>
              <HistoryBox>
                <Icon />
                <HistoryDesc>Expense</HistoryDesc>
              </HistoryBox>
              <HistoryBox>
                <Icon />
                <HistoryDesc>Investment</HistoryDesc>
              </HistoryBox>
            </Description>
          </ContentRight>
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
