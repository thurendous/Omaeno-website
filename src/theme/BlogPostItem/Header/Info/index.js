import React from 'react';
import Info from '@theme-original/BlogPostItem/Header/Info';
import { FeelbackPulse, PRESET_PULSE_HEART } from '@feelback/react';
import '@feelback/react/styles/feelback.css';

export default function InfoWrapper(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Info {...props} />
      <div style={{ marginLeft: '0.4em' }}>
        <FeelbackPulse
          contentSetId="f9929a3e-151a-4dba-bf29-1f606d53253f"
          preset={PRESET_PULSE_HEART}
          showCount
          revokable={true}
        />
      </div>
    </div>
  );
}
