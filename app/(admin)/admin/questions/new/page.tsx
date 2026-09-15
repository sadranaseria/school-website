import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const NewQuestionPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <form>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>متن سوال</FieldLabel>
              <Input />
            </Field>
            <Field>
              <FieldLabel>متن جواب</FieldLabel>
              <Input />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button className='w-full mt-4'>ساخت سوال</Button>
      </form>
    </div>
  );
};

export default NewQuestionPage;
