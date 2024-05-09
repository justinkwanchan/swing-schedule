'use client';

import { createEvent } from '@/lib/actions';
import {
  ConfigProvider,
  Form,
  Input,
  DatePicker,
  Checkbox,
  Col,
  Row,
} from 'antd';
import type { TimeRangePickerProps, GetProps } from 'antd';
import { useState, useTransition } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import utc from 'dayjs/plugin/utc';
dayjs.extend(isoWeek);
dayjs.extend(utc);

const { RangePicker } = DatePicker;

type RangePickerProps = GetProps<typeof RangePicker>;
type Props = {
  setOptimisticEvent: (action: { type: string; newEvent: EventCard }) => void;
};

export default function CreateEventForm({ setOptimisticEvent }: Props) {
  const [isRepeated, setIsRepeated] = useState(false);
  const [isPending, startTransition] = useTransition();

  /* Convert the date and range picker props to formatted Dayjs times */
  const datePickerValueProps = {
    getValueFromEvent: (inputDate: Dayjs | null) => inputDate?.toISOString(),
    getValueProps: (inputDate: string | undefined) => ({
      value: inputDate ? dayjs(inputDate) : '',
    }),
  };

  const rangePickerValueProps = {
    getValueFromEvent: (inputDate: Dayjs[] | null) =>
      inputDate?.map((date: Dayjs) => date?.toISOString()),
    getValueProps: (inputDate: string[] | undefined) => ({
      value: inputDate
        ? inputDate.map((input) => (input ? dayjs(input) : ''))
        : '',
    }),
  };

  const rangePickerFormatting: TimeRangePickerProps = {
    format: 'YYYY-MM-DD @ h:mma',
    minuteStep: 5,
    style: { width: '100%' },
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) =>
    current && current < dayjs().startOf('day');

  function submitEvent(formData: CreateEventFormData) {
    const id = crypto.randomUUID();
    const weekOf = dayjs(formData.dateTime[0])
      .utc()
      .isoWeekday(1)
      .startOf('day')
      .toISOString();
    const eventData = { ...formData, id, weekOf };
    const pk = `EVENT#${id}`;
    const eventCardData = {
      pk,
      weekOf,
      eventName: eventData.eventName,
      startDateTime: eventData.dateTime[0],
    };

    /* startTransition fixes browser warning */
    startTransition(() => {
      setOptimisticEvent({ type: 'ADD', newEvent: eventCardData });
    });
    createEvent(eventData);
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: 'white',
          },
        },
      }}
    >
      <div className="w-full flex justify-center">
        <Form
          onFinish={submitEvent}
          initialValues={{
            repeated: false,
          }}
          layout="vertical"
          className="w-5/6 m-auto"
        >
          <Form.Item
            label="Event Name"
            name="eventName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date and Time"
            name="dateTime"
            rules={[{ required: true }]}
            {...rangePickerValueProps}
          >
            <RangePicker
              showTime
              {...rangePickerFormatting}
              disabledDate={disabledDate}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label="Repeat Event"
                name="repeated"
                style={{ height: '63px' }}
                valuePropName="checked"
              >
                <Checkbox onChange={() => setIsRepeated(!isRepeated)} />
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                label="Repeated Until"
                name="repeatedUntil"
                rules={[{ required: isRepeated }]}
                hidden={!isRepeated}
                {...datePickerValueProps}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Event Price"
            name="price"
            rules={[{ required: true }]}
          >
            <Input prefix="$" />
          </Form.Item>
          <Form.Item
            label="Event Details"
            name="details"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button
              type="submit"
              className="font-bold bg-[#BDFFF3] w-max px-8 py-2 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)]"
            >
              Create Event
            </button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
}
