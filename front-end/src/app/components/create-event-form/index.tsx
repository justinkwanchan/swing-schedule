'use client';

import dayjs, { Dayjs } from 'dayjs';
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
import type { TimeRangePickerProps } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

export default function CreateEventForm() {
  const [isRepeated, setIsRepeated] = useState(false);

  /* Convert the date and range picker props to formatted Dayjs times */
  const datePickerValueProps = {
    getValueFromEvent: (inputDate: Dayjs | null) => inputDate?.format(),
    getValueProps: (inputDate: string | undefined) => ({
      value: inputDate ? dayjs(inputDate) : '',
    }),
  };

  const rangePickerValueProps = {
    getValueFromEvent: (inputDate: Dayjs[] | null) =>
      inputDate?.map((date: Dayjs) => date?.format()),
    getValueProps: (inputDate: string[] | undefined) => ({
      value: inputDate
        ? inputDate.map((input) => (input ? dayjs(input) : ''))
        : '',
    }),
  };

  const datePickerFormatting: TimeRangePickerProps = {
    format: 'YYYY-MM-DD @ h:mma',
    minuteStep: 5,
    style: { width: '100%' },
  };

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
          onFinish={createEvent}
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
            <RangePicker showTime {...datePickerFormatting} />
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
                <DatePicker style={{ width: '100%' }} />
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
