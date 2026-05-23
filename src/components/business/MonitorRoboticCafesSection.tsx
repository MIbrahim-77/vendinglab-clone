'use client'
import { motion } from 'framer-motion'

const phoneStyle: React.CSSProperties = {
  width: '220px',
  height: '420px',
  backgroundColor: '#1a1a1a',
  borderRadius: '24px',
  border: '2px solid #333',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
  flexShrink: 0,
}

function Toggle({ on }: { on: boolean }) {
  return (
    <div
      style={{
        width: '28px',
        height: '16px',
        borderRadius: '8px',
        backgroundColor: on ? '#8B4513' : '#ccc',
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: on ? 'auto' : '2px',
        }}
      />
    </div>
  )
}

function Phone1() {
  return (
    <div style={phoneStyle}>
      <div style={{ backgroundColor: '#3d2b1f', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: 'white', fontSize: '12px' }}>&larr;</span>
        <span style={{ color: 'white', fontSize: '11px', fontWeight: 700, flex: 1 }}>Dubai Frame 150</span>
        <span style={{ color: 'white', fontSize: '12px' }}>&#x21bb;</span>
      </div>
      <div style={{ backgroundColor: '#3d2b1f', display: 'flex', flexDirection: 'row', padding: '0 8px 4px' }}>
        {['STATUS', 'CONTROL', 'ORDERS', 'STATIST.', 'LO...'].map((tab) => (
          <span
            key={tab}
            style={{
              color: tab === 'STATUS' ? 'white' : '#999',
              borderBottom: tab === 'STATUS' ? '2px solid white' : '2px solid transparent',
              fontSize: '10px',
              fontWeight: tab === 'STATUS' ? 700 : 400,
              padding: '4px 6px',
              cursor: 'pointer',
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      <div style={{ backgroundColor: 'white', flex: 1, overflow: 'hidden', padding: '8px', fontSize: '10px' }}>
        <div style={{ color: '#555', fontWeight: 700, fontSize: '11px', marginBottom: '4px' }}>Cooking machine</div>
        <div style={{ display: 'flex', gap: '4px', color: '#999', fontSize: '10px', marginBottom: '2px' }}>
          <span style={{ flex: 1 }}>Status</span>
          <span style={{ flex: 1 }}>Code</span>
          <span style={{ flex: 1 }}>Error</span>
          <span style={{ flex: 1 }}>Code</span>
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ backgroundColor: '#4caf50', color: 'white', borderRadius: '4px', padding: '1px 6px', fontSize: '10px' }}>IDLE</span>
          <span style={{ color: '#555', fontSize: '10px', flex: 1 }}>1</span>
          <span style={{ color: '#555', fontSize: '10px', flex: 1 }}>OK</span>
          <span style={{ color: '#555', fontSize: '10px', flex: 1 }}>0</span>
        </div>
        <div style={{ color: '#555', fontWeight: 700, fontSize: '11px', marginBottom: '4px', marginTop: '4px' }}>Devices</div>
        <div style={{ display: 'flex', gap: '4px', color: '#999', fontSize: '10px', marginBottom: '2px' }}>
          <span style={{ flex: 1 }}>Name</span>
          <span style={{ flex: 1 }}>Code</span>
          <span style={{ flex: 1 }}>Status</span>
        </div>
        {[
          ['Manipulator', '12', 'Offline leak run (Enabled)'],
          ['Freezer left', '0', 'Mode: Refrigeration'],
          ['Freezer right', '0', 'Mode: Refrigeration'],
          ['Coffee machine', '0', 'OK'],
        ].map(([name, code, status]) => (
          <div key={name} style={{ backgroundColor: '#e8f5e9', borderRadius: '4px', marginBottom: '2px', padding: '1px 4px', display: 'flex', gap: '4px', fontSize: '10px' }}>
            <span style={{ flex: 1, color: '#333' }}>{name}</span>
            <span style={{ flex: 1, color: '#333' }}>{code}</span>
            <span style={{ flex: 1, color: '#333' }}>{status}</span>
          </div>
        ))}
        <div style={{ color: '#555', fontWeight: 700, fontSize: '11px', marginBottom: '4px', marginTop: '4px' }}>Levels</div>
        {[
          { label: 'Cups 1', pct: 80, val: '9' },
          { label: 'Cups 2', pct: 90, val: '14' },
          { label: 'Cups 3', pct: 85, val: '10' },
          { label: 'Cups 4', pct: 100, val: '60' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1px' }}>
            <span style={{ color: '#666', fontSize: '10px', width: '48px', flexShrink: 0 }}>{item.label}</span>
            <div style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: '#e0e0e0' }}>
              <div style={{ width: `${item.pct}%`, height: '100%', borderRadius: '3px', backgroundColor: '#4caf50' }} />
            </div>
            <span style={{ color: '#666', fontSize: '10px', width: '20px', textAlign: 'right' }}>{item.val}</span>
          </div>
        ))}
        {[
          { label: 'Freezer error Left', pct: 0, val: 'OK' },
          { label: 'Freezer error Right', pct: 0, val: 'OK' },
          { label: 'Coffee error', pct: 0, val: 'OK' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1px' }}>
            <span style={{ color: '#666', fontSize: '10px', width: '48px', flexShrink: 0 }}>{item.label}</span>
            <div style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: '#e0e0e0' }}>
              <div style={{ width: `${item.pct}%`, height: '100%', borderRadius: '3px', backgroundColor: '#4caf50' }} />
            </div>
            <span style={{ color: 'red', fontSize: '10px', width: '20px', textAlign: 'right' }}>{item.val}</span>
          </div>
        ))}
        {[
          { label: 'Topping counter 1', pct: 70, val: '42' },
          { label: 'Topping counter 2', pct: 60, val: '67' },
          { label: 'Topping counter 3', pct: 50, val: '...' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1px' }}>
            <span style={{ color: '#666', fontSize: '10px', width: '48px', flexShrink: 0 }}>{item.label}</span>
            <div style={{ flex: 1, height: '6px', borderRadius: '3px', backgroundColor: '#e0e0e0' }}>
              <div style={{ width: `${item.pct}%`, height: '100%', borderRadius: '3px', backgroundColor: '#4caf50' }} />
            </div>
            <span style={{ color: '#666', fontSize: '10px', width: '20px', textAlign: 'right' }}>{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Phone2() {
  return (
    <div style={phoneStyle}>
      <div style={{ backgroundColor: '#3d2b1f', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ color: 'white', fontSize: '12px' }}>&larr;</span>
        <span style={{ color: 'white', fontSize: '11px', fontWeight: 700, flex: 1 }}>Dubai Frame 150</span>
        <span style={{ color: 'white', fontSize: '12px' }}>&#x21bb;</span>
      </div>
      <div style={{ backgroundColor: '#3d2b1f', display: 'flex', flexDirection: 'row', padding: '0 8px 4px' }}>
        {['STATUS', 'CONTROL', 'ORDERS', 'STATIST.', 'LO...'].map((tab) => (
          <span
            key={tab}
            style={{
              color: tab === 'CONTROL' ? 'white' : '#999',
              borderBottom: tab === 'CONTROL' ? '2px solid white' : '2px solid transparent',
              fontSize: '10px',
              fontWeight: tab === 'CONTROL' ? 700 : 400,
              padding: '4px 6px',
              cursor: 'pointer',
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      <div style={{ backgroundColor: 'white', flex: 1, overflow: 'hidden', padding: '8px', fontSize: '10px' }}>
        {[
          { label: 'Turn on test mode', on: false },
          { label: 'Block for order', on: false },
          { label: 'Levels control', on: true },
          { label: 'Take credit cards', on: true },
          { label: 'WeChat', on: false },
          { label: 'AliPay', on: false },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid #eee' }}>
            <span style={{ color: '#333', fontSize: '10px' }}>{item.label}</span>
            <Toggle on={item.on} />
          </div>
        ))}
        <div style={{ textAlign: 'center', color: '#999', fontSize: '10px', marginTop: '6px', marginBottom: '4px' }}>POS Terminal</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
          <button style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 10px', backgroundColor: 'transparent', cursor: 'pointer' }}>CLOSE SHIFT</button>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '10px', marginTop: '4px', marginBottom: '4px' }}>Manipulator</div>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '4px' }}>
          {['RUN', 'STOP', 'MANUAL'].map((btn) => (
            <button key={btn} style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 8px', backgroundColor: 'transparent', cursor: 'pointer' }}>{btn}</button>
          ))}
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '10px', marginTop: '4px', marginBottom: '4px' }}>Freezer Left</div>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '2px' }}>
          {['REFRIG.', 'PRECOOLING', 'WASH'].map((btn) => (
            <button key={btn} style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 6px', backgroundColor: 'transparent', cursor: 'pointer' }}>{btn}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '4px' }}>
          {['PASTERUR.', 'BEATERHEAT.', 'OFF'].map((btn) => (
            <button key={btn} style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 6px', backgroundColor: 'transparent', cursor: 'pointer' }}>{btn}</button>
          ))}
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '10px', marginTop: '4px', marginBottom: '4px' }}>Freezer Right</div>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '2px' }}>
          {['REFRIG.', 'PRECOOLING', 'WASH'].map((btn) => (
            <button key={btn} style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 6px', backgroundColor: 'transparent', cursor: 'pointer' }}>{btn}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
          {['PASTERUR.', 'BEATERHEAT.'].map((btn) => (
            <button key={btn} style={{ border: '1px solid #bbb', borderRadius: '4px', color: '#555', fontSize: '10px', padding: '2px 6px', backgroundColor: 'transparent', cursor: 'pointer' }}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MonitorRoboticCafesSection() {
  return (
    <section style={{ backgroundColor: '#0a0a0a' }} className="py-20 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-shrink-0 max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-4xl md:text-5xl leading-tight mb-10">
            <div className="text-white">Monitor Multiple Robotic Cafes</div>
            <div style={{ color: '#f5a623' }}>With CafeXbots</div>
            <div style={{ color: '#f5a623' }}>Mobile App</div>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mt-6">
            See your investment opportunities delivering results through live sales reports. Track all sales levels for each Xbot on a single mobile screen with ease.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Phone1 />
          <Phone2 />
        </motion.div>
      </div>
    </section>
  )
}
