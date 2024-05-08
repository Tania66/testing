import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const FormInner = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
`;

export const FormTitle = styled.h3`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
  text-align: start;
`;

export const FormText = styled.p`
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 24px;
`;

export const IconConteiner = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  background: #f7f7f7;
  padding: 18px;
  outline: none;
  border: none;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const ButtonCalendar = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 88%;
  bottom: 25%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;
  outline: none;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  height: 114px;
  resize: none;
  overflow: auto;
  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 24px;
  border-radius: 200px;
  background: #e44848;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  padding: 16px 60px;
  display: block;
  width: 160px;
  margin-right: auto;
`;

export const MyCustomCalendar = styled(Calendar)`
  border-radius: 12px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 16px;
  background: #fff;
  position: absolute;
  z-index: 1;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__prev-button {
    width: 24px;
    height: 24px;
    color: #101828;
  }
  .react-calendar__navigation__next-button {
    width: 24px;
    height: 24px;
    color: #101828;
  }
  .react-calendar__navigation button {
    min-width: auto;
    background: transparent;
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 20px;
  }
  .react-calendar__navigation__label__labelText--from {
    color: #101828;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-decoration: none;
    color: #475467;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    padding: 0;
    margin-bottom: 20px;
  }
  .react-calendar__month-view__days__day {
    color: #101828;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 41px;
    height: 32px;
    padding: 0;
  }
  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    background-color: rgba(71, 84, 103, 0.2);
    border-radius: 45px;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: rgba(71, 84, 103, 0.2);
    border-radius: 45px;
  }

  .react-calendar__tile--now {
    background-color: #101828;
    color: #fff;
    border-radius: 45px;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #e44848;
    border-radius: 45px;
  }
  .react-calendar__tile--hasActive {
    background-color: #e44848;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #d84343;
    color: #fff;
    border-radius: 45px;
  }

  .react-calendar__tile--active {
    background-color: #e44848;
    color: white;
    border-radius: 45px;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e44848;
    border-radius: 45px;
  }
`;
