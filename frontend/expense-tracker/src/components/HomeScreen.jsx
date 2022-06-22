import React from "react";
import Labels from "./Labels";
import {
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useGetLabelsQuery,
} from "../reducer/expenseTrackerApi";
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
import { FaTrashAlt } from "react-icons/fa";
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
  // object destructuring
  const { data, isLoading, isSuccess, isError } = useGetLabelsQuery();
  // Called array destructuring, we are destructuring mutation
  const [deleteTransaction] = useDeleteTransactionMutation();
  const handleDelete = async () => {
    await deleteTransaction();
  };

  let Transactions;

  if (isLoading) {
    Transactions = <div>Loading data...</div>;
  }

  if (isSuccess) {
    Transactions = data?.map((v, i) => (
      <Description key={i}>
        <HistoryBox brt={`8px solid ${v.color}`}>
          <Icon onClick={() => deleteTransaction({ id: v._id })}>
            <FaTrashAlt color={`${v.color}`} />
          </Icon>
          <HistoryDesc>{v.name}</HistoryDesc>
        </HistoryBox>
      </Description>
    ));
  }
  if (isError) {
    Transactions = <div>Oops! An error occured.</div>;
  }

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // pick and destructured this from expensetrackerapi. Called array destructuring, we are destructuring mutation
  const [addTransaction] = useAddTransactionMutation();

  const submitHandler = async (values) => {
    await addTransaction(values).unwrap();
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
            {Transactions}
            {/* <Description>
              <HistoryBox>
                <Icon />
                <HistoryDesc>Salary</HistoryDesc>
              </HistoryBox>
            </Description> */}
          </ContentRight>
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
