import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 30%),
    linear-gradient(180deg, #04111c 0%, #0d2130 48%, #f8fafc 48%, #f8fafc 100%);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 520px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.2);
  overflow: hidden;
`;

export const Hero = styled.div`
  padding: 32px;
  background: linear-gradient(145deg, #082032 0%, #0f3a4f 100%);
  color: #f8fafc;
`;

export const Logo = styled.img`
  width: 84px;
  height: 84px;
  display: block;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: 30px;
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
  gap: 18px;
`;

export const Panel = styled.div`
  border-radius: 20px;
  padding: 18px 20px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: #334155;
  line-height: 1.6;
`;

export const Action = styled.button`
  height: 52px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`;
