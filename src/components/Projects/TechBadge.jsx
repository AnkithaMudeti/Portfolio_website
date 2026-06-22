import { memo } from 'react';

function TechBadge({ label }) {
  return <li className="tech-badge">{label}</li>;
}

export default memo(TechBadge);
