class ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projects
  end

  def show
    @project = Project.find(params[:id])

    render json: @projects
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render json: @project
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])

    if @project.destroy
      head :no_content
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :title,
      :description,
      :start_date,
      :end_date,
      :percentage_complete,
      :status,
      :users_id
    )
  def new 
    
  end
end
