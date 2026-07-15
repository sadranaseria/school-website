import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NewMajorsPage = () => {
  return (
    <form className='w-xl'>
      <FieldSet>
        <FieldLegend>ساخت رشته</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">عنوان رشته</FieldLabel>
            <Input id="title" className='w-full' />
          </Field>
          <Field>
            <FieldLabel htmlFor="description">توضیحات رشته</FieldLabel>
            <Textarea />
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default NewMajorsPage;
