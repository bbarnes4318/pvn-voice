import React from 'react';

interface ComplianceStatusProps {
  status: 'compliant' | 'non-compliant' | 'pending';
  progress: number;
  requirements: {
    name: string;
    status: 'complete' | 'incomplete' | 'pending';
  }[];
}

const ComplianceStatus: React.FC<ComplianceStatusProps> = ({
  status,
  progress,
  requirements
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'compliant':
        return 'bg-green-500';
      case 'non-compliant':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'compliant':
        return 'Compliant';
      case 'non-compliant':
        return 'Non-Compliant';
      case 'pending':
        return 'Pending Review';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Compliance Status</h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`}></div>
          <span className="text-gray-700">{getStatusText()}</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-700">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Requirements</h3>
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-gray-700">{req.name}</span>
            <div className="flex items-center space-x-2">
              {req.status === 'complete' && (
                <span className="text-green-500">✓</span>
              )}
              {req.status === 'incomplete' && (
                <span className="text-red-500">✕</span>
              )}
              {req.status === 'pending' && (
                <span className="text-yellow-500">○</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceStatus; 