import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { opacity: 0.45; }
  50% { opacity: 1; }
  100% { opacity: 0.45; }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(circle at top, rgba(34, 197, 94, 0.18), transparent 32%),
    linear-gradient(160deg, #04111c 0%, #0a2233 52%, #f2f7fb 52%, #f7fafc 100%);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 540px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 28px;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.22);
  overflow: hidden;
`;

export const Hero = styled.div`
  padding: 32px 32px 24px;
  background: linear-gradient(145deg, #082032 0%, #0f3a4f 100%);
  color: #f8fafc;
`;

export const Logo = styled.img`
  width: 84px;
  height: 84px;
  display: block;
  margin-bottom: 20px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(248, 250, 252, 0.74);
`;

export const Title = styled.h1`
  margin: 14px 0 10px;
  font-size: 32px;
  line-height: 1.1;
`;

export const Description = styled.p`
  margin: 0;
  color: rgba(248, 250, 252, 0.82);
  line-height: 1.6;
`;

export const Body = styled.div`
  padding: 28px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatusBox = styled.div`
  border-radius: 20px;
  padding: 16px 18px;
  border: 1px solid ${({ tone }) => tone === 'error'
    ? 'rgba(220, 38, 38, 0.28)'
    : tone === 'success'
      ? 'rgba(22, 163, 74, 0.24)'
      : 'rgba(14, 116, 144, 0.22)'};
  background: ${({ tone }) => tone === 'error'
    ? 'rgba(254, 242, 242, 0.96)'
    : tone === 'success'
      ? 'rgba(240, 253, 244, 0.96)'
      : 'rgba(240, 249, 255, 0.96)'};
  color: ${({ tone }) => tone === 'error' ? '#991b1b' : tone === 'success' ? '#166534' : '#155e75'};
`;

export const StatusTitle = styled.strong`
  display: block;
  margin-bottom: 6px;
  font-size: 15px;
`;

export const StatusText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

export const MetaPanel = styled.div`
  display: grid;
  gap: 12px;
  padding: 18px 20px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.18);
`;

export const MetaLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;
  color: #334155;

  span:first-child {
    color: #64748b;
    font-weight: 600;
  }

  span:last-child {
    text-align: right;
    font-weight: 700;
    color: #0f172a;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #0f172a;
  font-weight: 700;
  font-size: 14px;
`;

export const Input = styled.input`
  height: 52px;
  border-radius: 18px;
  border: 1px solid ${({ hasError }) => hasError ? 'rgba(220, 38, 38, 0.45)' : 'rgba(148, 163, 184, 0.35)'};
  padding: 0 16px;
  font-size: 16px;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #0f766e;
    box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.12);
  }
`;

export const Hint = styled.span`
  color: ${({ tone }) => tone === 'error' ? '#b91c1c' : '#64748b'};
  font-size: 13px;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PrimaryButton = styled.button`
  height: 54px;
  border: none;
  border-radius: 18px;
  background: ${({ disabled }) => disabled ? '#94a3b8' : 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'};
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${({ disabled }) => disabled ? 'none' : '0 18px 40px rgba(20, 184, 166, 0.25)'};
`;

export const SecondaryButton = styled.button`
  height: 48px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.32);
  background: #fff;
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const LoadingDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 8px;
  background: currentColor;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

export const Footer = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(148, 163, 184, 0.22);
`;

export const InlineLink = styled.a`
  color: #0f766e;
  font-weight: 700;
  text-decoration: none;
`;

export const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ResponsiveNote = styled.p`
  margin: 0;
  font-size: 13px;
  color: #475569;
  line-height: 1.6;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
