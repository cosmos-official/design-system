import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Text from '../packages/components/Text';
import './text.css';

const meta = {
  title: 'Design System/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# VINGLE Design System - Typography

VINGLE 디자인 시스템의 타이포그래피 컴포넌트입니다. Pretendard 폰트를 기반으로 하며, 다양한 크기와 굵기의 텍스트 스타일을 제공합니다.

## 타이포그래피 스케일

### Head (헤드)
- **Head 0**: 32px, SemiBold, 100% line-height, -1% letter-spacing
- **Head 1**: 24px, SemiBold, 100% line-height, -1% letter-spacing  
- **Head 2**: 20px, Bold, 100% line-height, -1% letter-spacing
- **Head 3**: 20px, SemiBold, 100% line-height, -1% letter-spacing

### Title (타이틀)
- **Title 1**: 16px, Bold, 120% line-height, -1% letter-spacing
- **Title 2**: 16px, SemiBold, 120% line-height, -1% letter-spacing
- **Title 3**: 16px, Medium, 120% line-height, -1% letter-spacing

### Subtitle (서브타이틀)
- **Subtitle 1**: 15px, Bold, 120% line-height, 0% letter-spacing
- **Subtitle 2**: 15px, SemiBold, 120% line-height, 0% letter-spacing
- **Subtitle 3**: 15px, Medium, 120% line-height, 0% letter-spacing

### Body (본문)
- **Body 1**: 14px, Bold, 120% line-height, 0% letter-spacing
- **Body 2**: 14px, SemiBold, 120% line-height, 0% letter-spacing
- **Body 3**: 14px, Medium, 120% line-height, 0% letter-spacing

### Label (라벨)
- **Label 1**: 13px, Bold, 120% line-height, 0% letter-spacing
- **Label 2**: 13px, SemiBold, 120% line-height, 0% letter-spacing
- **Label 3**: 13px, Medium, 120% line-height, 0% letter-spacing
- **Label 4**: 13px, Regular, 120% line-height, 0% letter-spacing

### Caption (캡션)
- **Caption 1**: 12px, Regular, 120% line-height, 0% letter-spacing
- **Caption 2**: 11px, Regular, 120% line-height, 0% letter-spacing
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    t: {
      control: 'select',
      options: [
        'h0',
        'h1',
        'h2',
        'h3',
        't1',
        't2',
        't3',
        'sub1',
        'sub2',
        'sub3',
        'b1',
        'b2',
        'b3',
        'l1',
        'l2',
        'l3',
        'l4',
        'c1',
        'c2',
      ],
      description: '타이포그래피 스타일',
    },
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'label',
        'strong',
        'em',
        'small',
      ],
      description: '렌더링할 HTML 요소',
    },
    children: {
      control: 'text',
      description: '텍스트 내용',
    },
  },
  args: {
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
    t: 'b1',
    as: 'span',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// Head 스타일들
export const Head0: Story = {
  args: {
    t: 'h0',
    as: 'h1',
    children: '빈티지 샵을 다 모았다! 빙글',
  },
};

export const Head1: Story = {
  args: {
    t: 'h1',
    as: 'h1',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Head2: Story = {
  args: {
    t: 'h2',
    as: 'h2',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Head3: Story = {
  args: {
    t: 'h3',
    as: 'h3',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

// Title 스타일들
export const Title1: Story = {
  args: {
    t: 't1',
    as: 'h4',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Title2: Story = {
  args: {
    t: 't2',
    as: 'h4',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Title3: Story = {
  args: {
    t: 't3',
    as: 'h4',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

// Subtitle 스타일들
export const Subtitle1: Story = {
  args: {
    t: 'sub1',
    as: 'h5',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Subtitle2: Story = {
  args: {
    t: 'sub2',
    as: 'h5',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Subtitle3: Story = {
  args: {
    t: 'sub3',
    as: 'h5',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

// Body 스타일들
export const Body1: Story = {
  args: {
    t: 'b1',
    as: 'p',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Body2: Story = {
  args: {
    t: 'b2',
    as: 'p',
    children: '빈티지 샵을 다 모았다! 빙글 Vingle',
  },
};

export const Body3: Story = {
  args: {
    t: 'b3',
    as: 'p',
    children: '빈티지 삶을 다 모았다! 빙글 Vingle',
  },
};

// Label 스타일들
export const Label1: Story = {
  args: {
    t: 'l1',
    as: 'label',
    children: '빈티지 삽을 다 모았다! 빙글 Vingle',
  },
};

export const Label2: Story = {
  args: {
    t: 'l2',
    as: 'label',
    children: '빈티지 삽을 다 모있다! 빙글 Vingle',
  },
};

export const Label3: Story = {
  args: {
    t: 'l3',
    as: 'label',
    children: '빈티지 삽을 다 모았다! 빙글 Vingle',
  },
};

export const Label4: Story = {
  args: {
    t: 'l4',
    as: 'label',
    children: '빈티지 삽을 나 모았빙글 Vingle',
  },
};

// Caption 스타일들
export const Caption1: Story = {
  args: {
    t: 'c1',
    as: 'small',
    children: '반니지 산을 나고있었나 빙글 Vingle',
  },
};

export const Caption2: Story = {
  args: {
    t: 'c2',
    as: 'small',
    children: '온 시선을 모아 빙글 Vingle',
  },
};

// 모든 타이포그래피 스타일을 한번에 보여주는 스토리
export const AllTypography: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        fontFamily: 'Pretendard, sans-serif',
      }}
    >
      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Head</h3>
        <Text t="h0" as="h1">
          빈티지 샵을 다 모았다! 빙글
        </Text>
        <Text t="h1" as="h1">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="h2" as="h2">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="h3" as="h3">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Title</h3>
        <Text t="t1" as="h4">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="t2" as="h4">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="t3" as="h4">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Subtitle</h3>
        <Text t="sub1" as="h5">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="sub2" as="h5">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="sub3" as="h5">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Body</h3>
        <Text t="b1" as="p">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="b2" as="p">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <Text t="b3" as="p">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Label</h3>

        <Text t="l1" as="label">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <br />
        <Text t="l2" as="label">
          빈티지 샵을 다 모있다! 빙글 Vingle
        </Text>
        <br />
        <Text t="l3" as="label">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <br />
        <Text t="l4" as="label">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>Caption</h3>
        <Text t="c1" as="small">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
        <br />
        <Text t="c2" as="small">
          빈티지 샵을 다 모았다! 빙글 Vingle
        </Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'VINGLE 디자인 시스템의 모든 타이포그래피 스타일을 한번에 확인할 수 있습니다.',
      },
    },
  },
};

// 문자셋 예시 스토리
export const CharacterSet: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        fontFamily: 'Pretendard, sans-serif',
      }}
    >
      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>한글</h3>
        <Text t="b1" as="p">
          가나다라마바사아자차카타파하
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>영문 대문자</h3>
        <Text t="b1" as="p">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>영문 소문자</h3>
        <Text t="b1" as="p">
          abcdefghijklmnopqrstuvwxyz
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>숫자</h3>
        <Text t="b1" as="p">
          0123456789
        </Text>
      </div>

      <div>
        <h3 style={{ marginBottom: '8px', color: '#666' }}>특수문자</h3>
        <Text t="b1" as="p">
          !@#$%^&*()
        </Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pretendard 폰트의 다양한 문자셋을 확인할 수 있습니다.',
      },
    },
  },
};
