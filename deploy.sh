#!/bin/bash

# Build the Next.js application
npm run build

# Sync the static files to S3
aws s3 sync out/ s3://oikosconsultants.com --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Deployment completed!" 