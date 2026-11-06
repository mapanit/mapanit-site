const labels = {
  critical: 'CRITICAL',
  high: 'HIGH',
  medium: 'MEDIUM',
  easy: 'EASY',
  project: 'PROJECT',
}

export default function SeverityBadge({ severity, label, className = '' }) {
  return (
    <span className={`severity-badge severity-${severity} ${className}`.trim()}>
      {label || labels[severity] || severity.toUpperCase()}
    </span>
  )
}
