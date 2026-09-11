const labels = {
  critical: 'CRITICAL',
  high: 'HIGH',
  medium: 'MEDIUM',
  project: 'PROJECT',
}

export default function SeverityBadge({ severity }) {
  return (
    <span className={`severity-badge severity-${severity}`}>
      {labels[severity] || severity.toUpperCase()}
    </span>
  )
}
