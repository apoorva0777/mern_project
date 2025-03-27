while true; do
    git add .
    
    # Check if there are staged changes before committing
    git diff --cached --quiet || { 
        git commit -m "Auto-commit: $(date)"
        git push origin main  # Change 'main' to your branch name if needed
    }

    sleep 300  # Wait 5 minutes before the next commit
done
