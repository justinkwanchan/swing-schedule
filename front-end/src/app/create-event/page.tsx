'use client';

import dayjs from 'dayjs';
import { createEvent, generateUUID } from '@/lib/actions';
import {
  ConfigProvider,
  Form,
  Input,
  DatePicker,
  Checkbox,
  Col,
  Row,
} from 'antd';
import type { DatePickerProps } from 'antd';
import { useState } from 'react';

export default function CreateEvent() {
  const [isRepeated, setIsRepeated] = useState(false);
  const datePickerValueProps = {
    getValueFromEvent: (inputDate: any) => inputDate?.format(),
    getValueProps: (inputDate: string) => ({
      value: inputDate ? dayjs(inputDate) : '',
    }),
  };

  const datePickerFormatting: DatePickerProps = {
    showTime: { format: 'h:mma' },
    format: 'YYYY-MM-DD @ h:mma',
    minuteStep: 5,
    style: { width: '100%' },
  };

  return (
    <main className="flex justify-center">
      <aside className="flex flex-col gap-4 bg-[#CDCFD0] p-8">
        <h1 className="text-2xl font-medium text-center">Posted Events</h1>
        <p className="text-sm max-w-xs leading-7">
          Below are your upcoming active events. Manage your events below or
          create a new listing.
        </p>
        <div>Created Events Placeholder</div>
      </aside>
      <section className="flex grow flex-col max-w-[1034px] gap-4 bg-[#484949]">
        <h1 className="text-2xl font-medium text-center text-white">
          Create Event
        </h1>
        <div className="h-96 bg-white"></div>
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
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Start Date/Time"
                    name="startDateTime"
                    rules={[{ required: true }]}
                    {...datePickerValueProps}
                  >
                    <DatePicker {...datePickerFormatting} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="End Date/Time"
                    name="endDateTime"
                    rules={[{ required: true }]}
                    {...datePickerValueProps}
                  >
                    <DatePicker {...datePickerFormatting} />
                  </Form.Item>
                </Col>
              </Row>
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
      </section>
    </main>
  );
}
