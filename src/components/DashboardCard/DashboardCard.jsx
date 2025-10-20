function DashboardCard({ title, value, icon, color, subtitle }) {
  return (
    <div className="card shadow-sm border-1 h-100">
      <div className="card-body d-flex flex-column justify-content-center align-items-center p-4">
        {/* Icon with background */}
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
          style={{ 
            backgroundColor: `${color}15`, // Light background using the color prop
            width: '70px', 
            height: '70px' 
          }}
        >
          <div className="fs-3" style={{ color }}>{icon}</div>
        </div>
        
        {/* Value */}
        <h3 className="fw-bold mb-1">{value}</h3>
        
        {/* Title */}
        <p className="text-muted mb-1">{title}</p>
        
        {/* Optional subtitle */}
        {subtitle && (
          <small className="text-muted">{subtitle}</small>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;