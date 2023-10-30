import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './formModal.css';

const schema = yup.object({
  email: yup.string().email('Email format is not valid').required('Email is required'),
  password: yup
    .string()
    .min(3, 'Minimum length is 3')
    .max(12, 'Maximum length is 12')
    .required('Password is required'),
});

type FormProps = {
  title: string;
  redirectLink: string;
  closeModal: () => void;
  toggleModals: () => void;
};

type Inputs = {
  email: string;
  password: string;
};

const FormModal: React.FC<FormProps> = ({ title, redirectLink, closeModal, toggleModals }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="task__form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Email" {...register('email', { required: true })} />
          {errors.email && <p className="input-error">{errors.email?.message}</p>}
        </div>
        <div>
          <input
            placeholder="Password"
            {...register('password', { required: true, minLength: 3 })}
          />
          {errors.password && <p className="input-error">{errors.password?.message}</p>}
        </div>
        <div className="form__submit-redirect">
          <input
            disabled={Object.keys(errors).length > 0}
            className="submit-btn"
            type="submit"
            value={title}
          />
          <button className="toggle-modal-link" type="button" onClick={toggleModals}>
            {redirectLink}
          </button>
        </div>
      </form>
      <button className="close-modal-btn" onClick={closeModal} type="button">
        Close
      </button>
    </div>
  );
};

export default FormModal;
