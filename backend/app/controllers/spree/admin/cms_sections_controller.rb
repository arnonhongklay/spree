module Spree
  module Admin
    class CmsSectionsController < ResourceController
      belongs_to 'spree/cms_page'

      before_action :load_data

      def collection_url
        spree.edit_admin_cms_page_path(@cms_page)
      end

      def location_after_save
        spree.edit_admin_cms_page_cms_section_path(@cms_page, @cms_section)
      end

      def remove_icon
        if @cms_section.icon&.destroy
          flash[:success] = Spree.t('notice_messages.icon_removed')
          redirect_to spree.edit_admin_cms_page_cms_section_path(@cms_page, @cms_section)
        else
          flash[:error] = Spree.t('errors.messages.cannot_remove_icon')
          render :edit
        end
      end

      private

      def parent
        @cms_page = CmsPage.friendly.find(params[:cms_page_id])
      end

      def load_data
        @cms_section_widths = Spree::CmsSection::SECTION_WIDTHS
        @cms_section_types = Spree::CmsSection::SECTION_TYPES
        @cms_section_links_to = Spree::CmsSection::SECTION_LINKS_TO
      end
    end
  end
end