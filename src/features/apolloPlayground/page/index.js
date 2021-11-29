import UseQueryPage from "../useQueryPage";
import UseMutationPage from "../useMutationPage";
import Row from "../shared/row";
import Col from "../shared/col";

const MainPage = () => {
  return (
    <>
      <Row>
        <Col>
          <UseMutationPage />
          {/* <UseQueryPage /> */}
        </Col>
      </Row>
    </>
  );
};
export default MainPage;
