# Icon Replacement Instructions

## 🎯 **Current Status**
I've set up a flexible icon system that allows you to easily replace the existing Lucide icons with your new PNG icons while maintaining the exact same layout, size, and positioning.

## 📁 **File Structure Created**
```
public/
  └── icons/
      ├── README.md
      └── [Your PNG icons go here]

src/
  └── components/
      └── ui/
          ├── CustomIcon.tsx     (Custom PNG icon component)
          └── IconConfig.tsx     (Icon configuration system)
```

## 🔄 **Current Icons in Demands Table**
1. **View Icon** (Eye) - Currently using Lucide `Eye` icon
2. **Query Icon** (MessageCircle) - Currently using Lucide `MessageCircle` icon  
3. **Approve Icon** (Check) - Currently using Lucide `Check` icon
4. **Reject Icon** (X) - Currently using Lucide `X` icon

## 📝 **How to Replace Icons**

### Step 1: Save Your PNG Icons
Save your PNG icons in the `public/icons/` directory with these names:
- `gradient-icon.png` - Your gradient icon (for any function you choose)
- `view-icon.png` - Custom view icon (optional)
- `query-icon.png` - Custom query icon (optional)
- `approve-icon.png` - Custom approve icon (optional)
- `reject-icon.png` - Custom reject icon (optional)

### Step 2: Configure Which Icons to Replace
Edit `src/components/ui/IconConfig.tsx` and change the `useCustomIcons` settings:

```typescript
export const iconConfig = {
  useCustomIcons: {
    view: true,      // Set to true to use your gradient icon for view button
    query: false,    // Set to true to use custom query icon
    approve: false,  // Set to true to use custom approve icon
    reject: false,   // Set to true to use custom reject icon
  },
  
  customIconPaths: {
    view: '/icons/gradient-icon.png',     // Your gradient icon
    query: '/icons/query-icon.png',       
    approve: '/icons/approve-icon.png',   
    reject: '/icons/reject-icon.png',     
  }
};
```

### Step 3: Update Icon Paths (if needed)
If you want to use your gradient icon for a different function, update the path:

```typescript
// To use your gradient icon for the approve button:
customIconPaths: {
  approve: '/icons/gradient-icon.png',  // Your gradient icon
}

// Then set:
useCustomIcons: {
  approve: true,  // Enable custom approve icon
}
```

## 🎨 **Icon Specifications**
- **Size**: 16x16px (matches current Lucide icons)
- **Format**: PNG with transparency
- **Quality**: High-resolution for crisp display
- **Placement**: Exact same position as original icons
- **Hover effects**: Maintained from original design

## 🚀 **Quick Start Example**
To replace the **View icon** (Eye) with your gradient icon:

1. Save your gradient icon as `public/icons/gradient-icon.png`
2. In `src/components/ui/IconConfig.tsx`, set:
   ```typescript
   useCustomIcons: {
     view: true,  // Enable custom view icon
   }
   ```
3. The change will be applied automatically!

## 🔧 **Advanced Customization**
You can also directly update icon paths for specific use cases:

```typescript
// Use your gradient icon for multiple functions:
customIconPaths: {
  view: '/icons/gradient-icon.png',
  approve: '/icons/gradient-icon.png',
}

useCustomIcons: {
  view: true,
  approve: true,
}
```

## ✅ **What's Already Done**
- ✅ Icon system is set up and ready
- ✅ DemandList.tsx is updated to use the new icon components
- ✅ Layout and spacing are preserved
- ✅ Hover effects and styling are maintained
- ✅ Easy configuration system is in place

## 🎯 **Next Steps**
1. Save your PNG icon(s) in `public/icons/`
2. Update the configuration in `IconConfig.tsx`
3. Refresh your browser to see the changes

The system is designed to maintain the exact same layout, size, and positioning while giving you full control over which icons to replace with your custom PNG files.
