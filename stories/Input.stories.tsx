import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputHTMLAttributes, useState } from 'react';
import { Input } from '../packages';
import './input.css';

interface InputStoryProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'type' | 'placeholder'
  > {
  label?: string;
  initialValue?: string;
  type?: string;
  placeholder?: string;
}
const InputStory = ({
  type,
  label,
  placeholder,
  initialValue = '',
  ...props
}: InputStoryProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">{label}</label>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - Input

VINGLE 디자인 시스템의 Input 컴포넌트입니다. HTML input 요소의 모든 속성을 지원하며, 접근성과 사용성을 고려하여 설계되었습니다.

## 특징

- **완전한 HTML Input 속성 지원**: 모든 HTML input 속성을 props로 전달 가능
- **접근성 고려**: ARIA 속성 및 키보드 네비게이션 지원
- **유연한 확장성**: 다양한 input 타입과 스타일링 지원

## 사용법

\`\`\`tsx
import Input from '@vingle/design-system/Input';

// 기본 사용법
<Input value="입력값" onChange={(e) => console.log(e.target.value)} />

// placeholder와 함께 사용
<Input 
  value="" 
  placeholder="검색어를 입력하세요" 
  onChange={(e) => setValue(e.target.value)} 
/>

// 다양한 input 타입
<Input type="email" value={email} placeholder="이메일을 입력하세요" />
<Input type="password" value={password} placeholder="비밀번호를 입력하세요" />
<Input type="number" value={age} placeholder="나이를 입력하세요" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | input의 값 (필수) |
| type | string | 'text' | input 타입 (text, email, password, number 등) |
| placeholder | string | - | placeholder 텍스트 |
| disabled | boolean | false | 비활성화 여부 |
| required | boolean | false | 필수 입력 여부 |
| ... | InputHTMLAttributes | - | 모든 HTML input 속성 지원 |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'input의 값',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'input 타입',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 여부',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    minLength: {
      control: 'number',
      description: '최소 입력 길이',
    },
    pattern: {
      control: 'text',
      description: '정규식 패턴',
    },
  },
  args: {
    value: '',
    type: 'text',
    placeholder: '텍스트를 입력하세요',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Input 스토리
export const Default: Story = {
  render: () => <InputStory placeholder="텍스트를 입력하세요" />,
};

// 값이 있는 Input
export const WithValue: Story = {
  render: () => (
    <InputStory placeholder="텍스트를 입력하세요" initialValue="빙글 Vingle" />
  ),
};

// 이메일 Input
export const Email: Story = {
  render: () => (
    <InputStory
      type="email"
      placeholder="이메일을 입력하세요"
      initialValue="user@vingle.com"
    />
  ),
};

// 비밀번호 Input
export const Password: Story = {
  render: () => (
    <InputStory
      type="password"
      placeholder="비밀번호를 입력하세요"
      initialValue="password123"
    />
  ),
};

// 숫자 Input
export const Number: Story = {
  render: () => (
    <InputStory
      type="number"
      placeholder="숫자를 입력하세요"
      initialValue="25"
      min={0}
      max={100}
    />
  ),
};

// 검색 Input
export const Search: Story = {
  render: () => (
    <InputStory
      type="search"
      placeholder="검색어를 입력하세요"
      initialValue="검색어"
    />
  ),
};

// 전화번호 Input
export const Telephone: Story = {
  render: () => (
    <InputStory
      type="tel"
      placeholder="전화번호를 입력하세요"
      initialValue="010-1234-5678"
      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
    />
  ),
};

// URL Input
export const URL: Story = {
  render: () => (
    <InputStory
      type="url"
      placeholder="URL을 입력하세요"
      initialValue="https://vingle.com"
    />
  ),
};

// 비활성화된 Input
export const Disabled: Story = {
  render: () => (
    <InputStory
      placeholder="비활성화된 입력창"
      initialValue="비활성화된 입력값"
      disabled
    />
  ),
};

// 읽기 전용 Input
export const ReadOnly: Story = {
  render: () => <InputStory initialValue="읽기 전용 입력값" readOnly />,
};

// 필수 입력 Input
export const Required: Story = {
  render: () => <InputStory placeholder="필수 입력 항목입니다" required />,
};

// 최대 길이 제한 Input
export const WithMaxLength: Story = {
  render: () => (
    <InputStory
      initialValue="최대 10자"
      maxLength={10}
      placeholder="최대 10자까지 입력 가능"
    />
  ),
};

// 최소 길이 제한 Input
export const WithMinLength: Story = {
  render: () => (
    <InputStory
      initialValue=""
      minLength={5}
      placeholder="최소 5자 이상 입력해주세요"
    />
  ),
};

// 모든 Input 타입을 한번에 보여주는 스토리
export const AllInputTypes: Story = {
  render: () => (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">텍스트</label>
        <Input
          value="일반 텍스트 입력"
          placeholder="텍스트를 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">이메일</label>
        <Input
          type="email"
          value="user@vingle.com"
          placeholder="이메일을 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">비밀번호</label>
        <Input
          type="password"
          value="password123"
          placeholder="비밀번호를 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">숫자</label>
        <Input
          type="number"
          value="25"
          placeholder="숫자를 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">검색</label>
        <Input
          type="search"
          value=""
          placeholder="검색어를 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">전화번호</label>
        <Input
          type="tel"
          value="010-1234-5678"
          placeholder="전화번호를 입력하세요"
          className="input-field"
        />
      </div>

      <div className="input-group">
        <label className="input-label">URL</label>
        <Input
          type="url"
          value="https://vingle.com"
          placeholder="URL을 입력하세요"
          className="input-field"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'VINGLE 디자인 시스템에서 지원하는 모든 Input 타입을 한번에 확인할 수 있습니다.',
      },
    },
  },
};

// Input 상태별 예시
export const InputStates: Story = {
  render: () => (
    <div className="input-container">
      <InputStory />

      <div className="input-group">
        <label className="input-label">값이 있는 상태</label>
        <Input value="입력된 값" placeholder="기본 입력창" />
      </div>

      <div className="input-group">
        <label className="input-label">비활성화 상태</label>
        <Input value="비활성화된 값" disabled />
      </div>

      <div className="input-group">
        <label className="input-label">읽기 전용 상태</label>
        <Input value="읽기 전용 값" readOnly />
      </div>

      <div className="input-group">
        <label className="input-label">필수 입력 상태</label>
        <Input value="" required placeholder="필수 입력 항목" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input 컴포넌트의 다양한 상태를 확인할 수 있습니다.',
      },
    },
  },
};

// 실제 입력 가능한 인터랙티브 스토리들
export const InteractiveInput: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="input-container">
        <div className="input-group">
          <label className="input-label">실제 입력 가능한 Input</label>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="여기에 입력해보세요"
            className="input-field"
          />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            입력된 값: &quot;{value}&quot;
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제로 값을 입력하고 변경할 수 있는 Input입니다.',
      },
    },
  },
};

export const InteractiveAllInputTypes: Story = {
  render: () => {
    const [textValue, setTextValue] = useState('일반 텍스트 입력');
    const [emailValue, setEmailValue] = useState('user@vingle.com');
    const [passwordValue, setPasswordValue] = useState('password123');
    const [numberValue, setNumberValue] = useState('25');
    const [searchValue, setSearchValue] = useState('');
    const [telValue, setTelValue] = useState('010-1234-5678');
    const [urlValue, setUrlValue] = useState('https://vingle.com');

    return (
      <div className="input-container">
        <div className="input-group">
          <label className="input-label">텍스트</label>
          <Input
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="텍스트를 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">이메일</label>
          <Input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">비밀번호</label>
          <Input
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">숫자</label>
          <Input
            type="number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
            placeholder="숫자를 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">검색</label>
          <Input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">전화번호</label>
          <Input
            type="tel"
            value={telValue}
            onChange={(e) => setTelValue(e.target.value)}
            placeholder="전화번호를 입력하세요"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">URL</label>
          <Input
            type="url"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder="URL을 입력하세요"
            className="input-field"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 Input 타입에서 실제로 값을 입력하고 변경할 수 있습니다.',
      },
    },
  },
};

export const InteractiveInputStates: Story = {
  render: () => {
    const [basicValue, setBasicValue] = useState('');
    const [filledValue, setFilledValue] = useState('입력된 값');
    const [disabledValue, setDisabledValue] = useState('비활성화된 값');
    const [readOnlyValue, setReadOnlyValue] = useState('읽기 전용 값');
    const [requiredValue, setRequiredValue] = useState('');

    return (
      <div className="input-container">
        <div className="input-group">
          <label className="input-label">기본 상태</label>
          <Input
            value={basicValue}
            onChange={(e) => setBasicValue(e.target.value)}
            placeholder="기본 입력창"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">값이 있는 상태</label>
          <Input
            value={filledValue}
            onChange={(e) => setFilledValue(e.target.value)}
            placeholder="기본 입력창"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">비활성화 상태</label>
          <Input
            value={disabledValue}
            onChange={(e) => setDisabledValue(e.target.value)}
            disabled
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">읽기 전용 상태</label>
          <Input
            value={readOnlyValue}
            onChange={(e) => setReadOnlyValue(e.target.value)}
            readOnly
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">필수 입력 상태</label>
          <Input
            value={requiredValue}
            onChange={(e) => setRequiredValue(e.target.value)}
            required
            placeholder="필수 입력 항목"
            className="input-field"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input 컴포넌트의 다양한 상태에서 실제로 값을 입력할 수 있습니다.',
      },
    },
  },
};

export const FormValidationExample: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>(
      {}
    );

    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
      return password.length >= 8;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);

      if (value && !validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: '올바른 이메일 형식이 아닙니다.',
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPassword(value);

      if (value && !validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: '비밀번호는 8자 이상이어야 합니다.',
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: '' }));
      }
    };

    return (
      <div className="input-container">
        <div className="input-group">
          <label className="input-label">이메일 (실시간 검증)</label>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력하세요"
            className={`input-field ${errors.email ? 'error' : ''}`}
          />
          {errors.email && (
            <p style={{ marginTop: '4px', fontSize: '12px', color: '#dc3545' }}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="input-group">
          <label className="input-label">비밀번호 (실시간 검증)</label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요 (8자 이상)"
            className={`input-field ${errors.password ? 'error' : ''}`}
          />
          {errors.password && (
            <p style={{ marginTop: '4px', fontSize: '12px', color: '#dc3545' }}>
              {errors.password}
            </p>
          )}
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>입력된 값:</h4>
          <p style={{ margin: '4px 0', fontSize: '12px' }}>
            이메일: {email || '(입력 없음)'}
          </p>
          <p style={{ margin: '4px 0', fontSize: '12px' }}>
            비밀번호: {password ? '•'.repeat(password.length) : '(입력 없음)'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '실시간 폼 검증 예시입니다. 이메일과 비밀번호 입력 시 실시간으로 유효성을 검사합니다.',
      },
    },
  },
};
