import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import { DatabaseIcon, VectorIcon, TrashIcon } from './icons';
import { getMessage } from '@/utils/i18n';

const ModelCacheManagement = ({ cacheStats, isManagingCache, onCleanupCache, onClearAllCache }) => {
  const getModelNameFromUrl = (url) => {
    // Extract model name from HuggingFace URL
    const match = url.match(/huggingface\.co\/([^/]+\/[^/]+)/);
    if (match) {
      return match[1];
    }
    return url.split('/').pop() || url;
  };

  return (
    <div className="model-cache-section">
      <h2 className="section-title">{getMessage('modelCacheManagementLabel')}</h2>

      {/* Cache Statistics Grid */}
      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-header">
            <p className="stats-label">{getMessage('cacheSizeLabel')}</p>
            <span className="stats-icon orange">
              <DatabaseIcon />
            </span>
          </div>
          <p className="stats-value">{cacheStats?.totalSizeMB || 0} MB</p>
        </div>

        <div className="stats-card">
          <div className="stats-header">
            <p className="stats-label">{getMessage('cacheEntriesLabel')}</p>
            <span className="stats-icon purple">
              <VectorIcon />
            </span>
          </div>
          <p className="stats-value">{cacheStats?.entryCount || 0}</p>
        </div>
      </div>

      {/* Cache Entries Details */}
      {cacheStats && cacheStats.entries && cacheStats.entries.length > 0 && (
        <div className="cache-details">
          <h3 className="cache-details-title">{getMessage('cacheDetailsLabel')}</h3>
          <div className="cache-entries">
            {cacheStats.entries.map((entry) => (
              <div key={entry.url} className="cache-entry">
                <div className="entry-info">
                  <div className="entry-url">{getModelNameFromUrl(entry.url)}</div>
                  <div className="entry-details">
                    <span className="entry-size">{entry.sizeMB} MB</span>
                    <span className="entry-age">{entry.age}</span>
                    {entry.expired && (
                      <span className="entry-expired">{getMessage('expiredLabel')}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Cache Message */}
      {cacheStats && cacheStats.entries && cacheStats.entries.length === 0 && (
        <div className="no-cache">
          <p>{getMessage('noCacheDataMessage')}</p>
        </div>
      )}

      {/* Loading State */}
      {!cacheStats && (
        <div className="loading-cache">
          <p>{getMessage('loadingCacheInfoStatus')}</p>
        </div>
      )}

      {/* Progress Indicator */}
      {isManagingCache && (
        <ProgressIndicator
          visible={isManagingCache}
          text={isManagingCache ? getMessage('processingCacheStatus') : ''}
          showSpinner={true}
        />
      )}

      {/* Action Buttons */}
      <div className="cache-actions">
        <div className="secondary-button" disabled={isManagingCache} onClick={onCleanupCache}>
          <span className="stats-icon">
            <DatabaseIcon />
          </span>
          <span>
            {isManagingCache ? getMessage('cleaningStatus') : getMessage('cleanExpiredCacheButton')}
          </span>
        </div>

        <div className="danger-button" disabled={isManagingCache} onClick={onClearAllCache}>
          <span className="stats-icon">
            <TrashIcon />
          </span>
          <span>
            {isManagingCache ? getMessage('clearingStatus') : getMessage('clearAllCacheButton')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelCacheManagement;
