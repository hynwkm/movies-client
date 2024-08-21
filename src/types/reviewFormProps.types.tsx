type ReviewFormProps = {
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    revText: React.RefObject<HTMLTextAreaElement>;
    defaultValue?: string;
    labelText: string;
};
export default ReviewFormProps;
