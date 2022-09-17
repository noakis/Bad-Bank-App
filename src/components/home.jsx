import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UserContext } from "./context";

export function Home() {
  const ctx = useContext(UserContext);
  return (
    <Row>
      <Col xs={12} lg={6}>
        <Card>
          <Card.Body>
            <Card.Title>
              <h2 className="text-uppercase">Welcome to Bad Bank</h2>
            </Card.Title>
            <Card.Text>
              <h5>For all your banking needs</h5>
              <img
                src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/Shutterstock1922231216-1658584716.jpg&w=900&height=601"
                className="img-fluid mt-4"
                alt="bank-cover"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
