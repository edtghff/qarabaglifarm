# Supabase RLS Policies for Admin Panel

If delete operations in the admin panel fail, ensure these RLS policies exist in your Supabase project.

## Required Policies

### For `products` table
```sql
-- Allow all operations for products (anon for public admin)
CREATE POLICY "Allow all for products" ON products
  FOR ALL USING (true) WITH CHECK (true);
```

### For `gallery_images` table
```sql
-- Allow all operations for gallery_images (anon for public admin)
CREATE POLICY "Allow all for gallery_images" ON gallery_images
  FOR ALL USING (true) WITH CHECK (true);
```

Run these in Supabase Dashboard → SQL Editor if delete/add operations fail.
