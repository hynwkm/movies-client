import { Button, Form } from "react-bootstrap";
import ReviewFormProps from "../../types/reviewFormProps.types";
import "./ReviewForm.scss";

export default function ReviewForm({
    handleSubmit,
    revText,
    defaultValue,
    labelText,
}: ReviewFormProps) {
    return (
        <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control
                    ref={revText}
                    as="textarea"
                    rows={3}
                    defaultValue={defaultValue}
                    className="form-textarea"
                />
                <Button
                    onClick={handleSubmit}
                    className="review-submit-button"
                    variant="outline-info">
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}
