```javascript
// in your component file
<div style={{ backgroundImage: "linear-gradient(to right, #6366F1, #818CF8)", padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
  {/* content */}
</div>
```
This solution uses inline styles with `linear-gradient` to explicitly define the gradient, bypassing any potential Tailwind conflicts.  Adjust the `linear-gradient` values to match your desired colors and direction.