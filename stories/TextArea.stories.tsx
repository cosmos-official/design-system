import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextareaHTMLAttributes, useState } from 'react';
import './textarea.css';
import { TextArea } from '@/packages';

interface TextAreaStoryProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'value'
  > {
  label?: string;
  initialValue?: string;
}

const TextAreaStory = ({
  label,
  initialValue = '',
  ...props
}: TextAreaStoryProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="textarea-container">
      <div className="textarea-group">
        {label && <label className="textarea-label">{label}</label>}
        <TextArea value={value} onChange={handleChange} {...props} />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design System/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - TextArea

VINGLE 디자인 시스템의 TextArea 컴포넌트입니다. HTML textarea 요소의 모든 속성을 지원하며, 접근성과 사용성을 고려하여 설계되었습니다.

## 특징

- **완전한 HTML Textarea 속성 지원**: 모든 HTML textarea 속성을 props로 전달 가능
- **TypeScript 지원**: 완전한 타입 안전성 제공
- **접근성 고려**: ARIA 속성 및 키보드 네비게이션 지원
- **유연한 확장성**: 다양한 크기와 스타일링 지원
- **자동 리사이즈**: 내용에 따른 높이 자동 조절

## 사용법

\`\`\`tsx
import TextArea from '@vingle/design-system/TextArea';

// 기본 사용법
<TextArea 
  value="입력된 텍스트" 
  onChange={(e) => console.log(e.target.value)} 
/>

// placeholder와 함께 사용
<TextArea 
  value="" 
  placeholder="내용을 입력하세요" 
  onChange={(e) => setValue(e.target.value)} 
/>

// 크기 조절 가능
<TextArea 
  rows={5}
  cols={50}
  value={content}
  placeholder="여러 줄 텍스트 입력"
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | textarea의 값 (필수) |
| rows | number | 3 | 기본 행 수 |
| cols | number | 50 | 기본 열 수 |
| placeholder | string | - | placeholder 텍스트 |
| disabled | boolean | false | 비활성화 여부 |
| readOnly | boolean | false | 읽기 전용 여부 |
| maxLength | number | - | 최대 입력 길이 |
| ... | TextareaHTMLAttributes | - | 모든 HTML textarea 속성 지원 |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
      description: '기본 행 수',
    },
    cols: {
      control: 'number',
      description: '기본 열 수',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
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
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
  },
  args: {
    rows: 3,
    cols: 50,
    placeholder: '내용을 입력하세요',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 TextArea 스토리
export const Default: Story = {
  render: () => <TextAreaStory placeholder="내용을 입력하세요" />,
};

// 값이 있는 TextArea
export const WithValue: Story = {
  render: () => (
    <TextAreaStory
      placeholder="내용을 입력하세요"
      initialValue="빙글 Vingle 디자인 시스템의 TextArea 컴포넌트입니다. 여러 줄의 텍스트를 입력할 수 있습니다."
    />
  ),
};

// 긴 텍스트 TextArea
export const LongText: Story = {
  render: () => (
    <TextAreaStory
      placeholder="긴 텍스트를 입력하세요"
      initialValue={`빙글 Vingle 디자인 시스템은 사용자 경험을 최우선으로 하는 컴포넌트 라이브러리입니다.

주요 특징:
• 완전한 TypeScript 지원
• 접근성 고려
• 일관된 디자인 시스템
• 유연한 커스터마이징

이 TextArea 컴포넌트는 여러 줄의 텍스트를 입력할 때 사용됩니다.`}
      rows={8}
    />
  ),
};

// 크기별 TextArea
export const Sizes: Story = {
  render: () => (
    <div className="textarea-container">
      <div className="textarea-group">
        <label className="textarea-label">작은 크기 (3행)</label>
        <TextArea placeholder="작은 텍스트 영역" rows={3} cols={30} />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">중간 크기 (5행)</label>
        <TextArea placeholder="중간 텍스트 영역" rows={5} cols={50} />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">큰 크기 (8행)</label>
        <TextArea placeholder="큰 텍스트 영역" rows={8} cols={70} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 TextArea를 확인할 수 있습니다.',
      },
    },
  },
};

// 비활성화된 TextArea
export const Disabled: Story = {
  render: () => (
    <TextAreaStory
      placeholder="비활성화된 텍스트 영역"
      initialValue="이 텍스트는 수정할 수 없습니다."
      disabled
    />
  ),
};

// 읽기 전용 TextArea
export const ReadOnly: Story = {
  render: () => (
    <TextAreaStory
      placeholder="읽기 전용 텍스트 영역"
      initialValue="이 텍스트는 읽기 전용입니다."
      readOnly
    />
  ),
};

// 필수 입력 TextArea
export const Required: Story = {
  render: () => <TextAreaStory placeholder="필수 입력 항목입니다" required />,
};

// 최대 길이 제한 TextArea
export const WithMaxLength: Story = {
  render: () => (
    <TextAreaStory
      placeholder="최대 100자까지 입력 가능"
      maxLength={100}
      initialValue="이미 입력된 텍스트입니다."
    />
  ),
};

// 최소 길이 제한 TextArea
export const WithMinLength: Story = {
  render: () => (
    <TextAreaStory placeholder="최소 10자 이상 입력해주세요" minLength={10} />
  ),
};

// 모든 TextArea 상태를 한번에 보여주는 스토리
export const AllTextAreaStates: Story = {
  render: () => (
    <div className="textarea-container">
      <div className="textarea-group">
        <label className="textarea-label">기본 상태</label>
        <TextArea placeholder="기본 텍스트 영역" />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">값이 있는 상태</label>
        <TextArea value="입력된 텍스트가 있는 상태입니다." readOnly />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">비활성화 상태</label>
        <TextArea value="비활성화된 텍스트 영역" disabled />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">읽기 전용 상태</label>
        <TextArea value="읽기 전용 텍스트 영역" readOnly />
      </div>

      <div className="textarea-group">
        <label className="textarea-label">필수 입력 상태</label>
        <TextArea placeholder="필수 입력 항목" required />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TextArea 컴포넌트의 모든 상태를 한번에 확인할 수 있습니다.',
      },
    },
  },
};

// 실제 입력 가능한 인터랙티브 스토리들
export const InteractiveTextArea: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="textarea-container">
        <div className="textarea-group">
          <label className="textarea-label">실제 입력 가능한 TextArea</label>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="여기에 입력해보세요"
          />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
            입력된 글자 수: {value.length}자
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제로 값을 입력하고 변경할 수 있는 TextArea입니다.',
      },
    },
  },
};

export const InteractiveAllTextAreas: Story = {
  render: () => {
    const [shortText, setShortText] = useState('짧은 텍스트');
    const [longText, setLongText] = useState(`긴 텍스트 예시입니다.
여러 줄에 걸쳐 작성된 텍스트를 확인할 수 있습니다.
빙글 Vingle 디자인 시스템의 TextArea 컴포넌트는 사용자 친화적인 인터페이스를 제공합니다.`);
    const [commentText, setCommentText] = useState('');

    return (
      <div className="textarea-container">
        <div className="textarea-group">
          <label className="textarea-label">짧은 텍스트</label>
          <TextArea
            value={shortText}
            onChange={(e) => setShortText(e.target.value)}
            placeholder="짧은 텍스트를 입력하세요"
            rows={2}
          />
        </div>

        <div className="textarea-group">
          <label className="textarea-label">긴 텍스트</label>
          <TextArea
            value={longText}
            onChange={(e) => setLongText(e.target.value)}
            placeholder="긴 텍스트를 입력하세요"
            rows={6}
          />
        </div>

        <div className="textarea-group">
          <label className="textarea-label">댓글 입력</label>
          <TextArea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 입력하세요..."
            rows={3}
            maxLength={200}
          />
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>
            {commentText.length}/200자
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 TextArea에서 실제로 값을 입력하고 변경할 수 있습니다.',
      },
    },
  },
};

export const FormValidationExample: Story = {
  render: () => {
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState<{ description?: string }>({});

    const validateDescription = (text: string) => {
      if (text.length < 10) {
        return '설명은 최소 10자 이상 입력해주세요.';
      }
      if (text.length > 500) {
        return '설명은 최대 500자까지 입력 가능합니다.';
      }
      return '';
    };

    const handleDescriptionChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const value = e.target.value;
      setDescription(value);

      const error = validateDescription(value);
      setErrors({ description: error });
    };

    return (
      <div className="textarea-container">
        <div className="textarea-group">
          <label className="textarea-label">상품 설명 (실시간 검증)</label>
          <TextArea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="상품에 대한 자세한 설명을 입력하세요 (10-500자)"
            rows={5}
            maxLength={500}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && (
            <p style={{ marginTop: '4px', fontSize: '12px', color: '#dc3545' }}>
              {errors.description}
            </p>
          )}
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>
            {description.length}/500자
          </p>
        </div>

        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
            입력된 내용:
          </h4>
          <p
            style={{
              margin: '4px 0',
              fontSize: '12px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {description || '(입력 없음)'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          '실시간 폼 검증 예시입니다. 상품 설명 입력 시 실시간으로 유효성을 검사합니다.',
      },
    },
  },
};
